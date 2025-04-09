using backend.Models;
using Microsoft.EntityFrameworkCore;

namespace backend.Data;

public class DinoContext : DbContext
{
    public DinoContext(DbContextOptions<DinoContext> options) : base(options)
    {
    }
    public DbSet<Dino> Dinos { get; set; }
}