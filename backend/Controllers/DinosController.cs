using backend.Data;
using backend.Dtos;
using backend.Models;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;

namespace backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class DinosController : ControllerBase
    {
        private readonly DinoContext _context;

        public DinosController(DinoContext context)
        {
            _context = context;
        }
        
        // GET /api/dinos
        [HttpGet]
        public ActionResult<IEnumerable<DinoDto>> GetDinos()
        {
            var dinos = _context.Dinos
                .Select(c => new DinoDto
                {
                    Name = c.Name,
                    ErstesAufkommen = c.ErstesAufkommen,
                    KoerperLaenge = c.KoerperLaenge,
                    KoerperHoehe = c.KoerperHoehe,
                    SchaedelLaenge = c.SchaedelLaenge,
                    Gewicht = c.Gewicht
                })
                .ToList();
            return Ok(dinos);
        }
        
        // GET /api/dinos/{id}
        [HttpGet("{id}")]
        public ActionResult<DinoDto> GetDinoById(Guid id)
        {
            // EF-Entity abfragen
            var dinoEntity = _context.Dinos.Find(id);
            if (dinoEntity == null) return NotFound();

            // In Dto transformieren
            var dto = new DinoDto
            {
                Name = dinoEntity.Name,
                ErstesAufkommen = dinoEntity.ErstesAufkommen,
                KoerperLaenge = dinoEntity.KoerperLaenge,
                KoerperHoehe = dinoEntity.KoerperHoehe,
                SchaedelLaenge = dinoEntity.SchaedelLaenge,
                Gewicht = dinoEntity.Gewicht
            };

            return Ok(dto);
        }
        
        // POST /api/dinos
        [HttpPost]
        public ActionResult<DinoDto> CreateDino([FromBody] CreateDinoDto newDino)
        {
            // Entity anlegen und aus DTO befüllen
            var dinoEntity = new Dino
            {
                Id = Guid.NewGuid(),  // Generiere die Guid für den neuen Dino
                Name = newDino.Name,
                ErstesAufkommen = newDino.ErstesAufkommen,
                KoerperLaenge = newDino.KoerperLaenge,
                KoerperHoehe = newDino.KoerperHoehe,
                SchaedelLaenge = newDino.SchaedelLaenge,
                Gewicht = newDino.Gewicht
            };

            // Speichern
            _context.Dinos.Add(dinoEntity);
            _context.SaveChanges();

            // Die neu erstellte Entity zurückgeben
            var createdDinoDto = new DinoDto
            {
                Name = dinoEntity.Name,
                ErstesAufkommen = dinoEntity.ErstesAufkommen,
                KoerperLaenge = dinoEntity.KoerperLaenge,
                KoerperHoehe = dinoEntity.KoerperHoehe,
                SchaedelLaenge = dinoEntity.SchaedelLaenge,
                Gewicht = dinoEntity.Gewicht
            };

            return CreatedAtAction(nameof(GetDinoById),
                new { id = dinoEntity.Id },
                createdDinoDto);
        }
    }
}

