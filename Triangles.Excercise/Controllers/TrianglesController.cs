using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace Triangles.Excercise.Controllers
{
    [ApiController]
    [Route("/api/v1/[controller]")]
    public class TrianglesController : ControllerBase
    {


        private readonly ILogger<TrianglesController> _logger;

        public TrianglesController(ILogger<TrianglesController> logger)
        {
            _logger = logger;
        }

        [HttpGet("{id}")]
        public ActionResult<TriangleInfo> GetById(string id, int sideLenght=100)
        {
            var rowId = id[0].ToString();
            int columnId = Convert.ToInt32(id.Substring(1));

            var result = new TriangleInfo(rowId, columnId, sideLenght);
            return result;
        }

        [HttpGet]
        public ActionResult<TriangleInfo> GetTriangleByVertices(int v1x, int v1y, int v2x, int v2y, int v3x, int v3y,int sideLenght = 100)
        {
            var result = new TriangleInfo(v1x, v1y, v2x, v2y, v3x, v3y, sideLenght);

            var result2 = new TriangleInfo(result.DisplayName[0].ToString(), Convert.ToInt32(result.DisplayName.Substring(1)), sideLenght);

            if (!result.Vertices.OrderBy(a => a.X).ThenBy(a => a.Y).SequenceEqual(result2.Vertices.OrderBy(a => a.X).ThenBy(a => a.Y)))
            {
                return BadRequest("Given coordinates do not form valid triangle");

            }

            return result;
        }
        
        
    }
}
