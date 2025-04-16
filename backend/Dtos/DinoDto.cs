using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Dtos;

public class DinoDto
{
    [Key]
    public Guid Id { get; set; }
    
    [Required]
    [MaxLength(100)]
    public string Name { get; set; }
    
    [Required]
    public decimal ErstesAufkommen { get; set; }
    
    [Required]
    [Column(TypeName = "decimal(9,2)")]
    public decimal KoerperLaenge { get; set; }
    
    [Required]
    [Column(TypeName = "decimal(9,2)")]
    public decimal KoerperHoehe { get; set; }
    
    [Required]
    [Column(TypeName = "decimal(9,2)")]
    public decimal SchaedelLaenge { get; set; }
    
    [Required]
    [Column(TypeName = "decimal(9,2)")]
    public decimal Gewicht { get; set; }
    
    [Required]
    [MaxLength(100)]
    public string Spiel { get; set; }
}