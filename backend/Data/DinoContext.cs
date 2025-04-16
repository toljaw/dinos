using backend.Models;
using Microsoft.EntityFrameworkCore;

namespace backend.Data;

public class DinoContext : DbContext
{
    // Konstruktor wird vom base geerbt
    public DinoContext(DbContextOptions<DinoContext> options) : base(options)
    {
    }
    public DbSet<Dino> Dinos { get; set; }
}