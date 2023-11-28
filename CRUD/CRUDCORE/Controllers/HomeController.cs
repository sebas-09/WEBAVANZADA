using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc.Rendering;
using CRUDCORE.Models;
using CRUDCORE.Models.ViewModels;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace CRUDCORE.Controllers
{
    public class HomeController : Controller
    {
        private readonly DbcrudcoreContext _dbContext;

        public HomeController(DbcrudcoreContext context)
        {
            _dbContext = context;
        }

        public IActionResult Index()
        {
            List<Empleado> lista = _dbContext.Empleados.Include(c => c.oCargo).ToList();
            return View(lista);
        }
        [HttpGet]
        public IActionResult Empleado_Detalle(int idEmpleado)
        {
            EmpleadoVM oEmpleadoVM = new EmpleadoVM()
            {
                oEmpleado = new Empleado(),
                oListaCargo = _dbContext.Cargos.Select(cargo => new SelectListItem()
                {
                    Text = cargo.Descripcion,
                    Value = cargo.IdCargo.ToString()

                }).ToList()
            };

            if (idEmpleado != 0)
            {

                oEmpleadoVM.oEmpleado = _dbContext.Empleados.Find(idEmpleado);
            }


            return View(oEmpleadoVM);
        }

        [HttpPost]
        public IActionResult Empleado_Detalle(EmpleadoVM oEmpleadoVM)
        {
            if (oEmpleadoVM.oEmpleado.IdEmpleado == 0)
            {
                _dbContext.Empleados.Add(oEmpleadoVM.oEmpleado);

            }
            else
            {
                _dbContext.Empleados.Update(oEmpleadoVM.oEmpleado);
            }

            _dbContext.SaveChanges();

            return RedirectToAction("Index", "Home");
        }



        [HttpGet]
        public IActionResult Eliminar(int idEmpleado)
        {
            Empleado oEmpleado = _dbContext.Empleados.Include(c => c.oCargo).Where(e => e.IdEmpleado == idEmpleado).FirstOrDefault();

            return View(oEmpleado);
        }

        [HttpPost]
        public IActionResult Eliminar(Empleado oEmpleado)
        {
            _dbContext.Empleados.Remove(oEmpleado);
            _dbContext.SaveChanges();

            return RedirectToAction("Index", "Home");
        }
        [HttpGet]
        public IActionResult Detalle(int idEmpleado)
        {
            Empleado oEmpleado = _dbContext.Empleados.Include(c => c.oCargo).Where(e => e.IdEmpleado == idEmpleado).FirstOrDefault();

            return View(oEmpleado);
        }

    }
}
