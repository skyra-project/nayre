using System.Reflection;
using Acryss.Database.Models;
using Microsoft.EntityFrameworkCore;

namespace Acryss.Database;

public class AcryssDbContext : DbContext
{
	public DbSet<Alliance> Alliances { get; set; } = null!;
	public DbSet<Player> Players { get; set; } = null!;
	public DbSet<PlayerDefences> PlayerDefences { get; set; } = null!;
	public DbSet<PlayerFacilities> PlayerFacilities { get; set; } = null!;
	public DbSet<PlayerFleet> PlayerFleets { get; set; } = null!;
	public DbSet<PlayerResearch> PlayerResearch { get; set; } = null!;
	public DbSet<PlayerResources> PlayerResources { get; set; } = null!;
	public DbSet<Universe> Universes { get; set; } = null!;

	protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
	{
		if (optionsBuilder.IsConfigured) return;

		var user = Environment.GetEnvironmentVariable("POSTGRES_USER") ?? "postgres";
		var password = Environment.GetEnvironmentVariable("POSTGRES_PASSWORD") ?? "postgres";
		var host = Environment.GetEnvironmentVariable("POSTGRES_HOST") ?? "localhost";
		var port = Environment.GetEnvironmentVariable("POSTGRES_PORT") ?? "5432";
		var name = Environment.GetEnvironmentVariable("POSTGRES_DB") ?? "acryss";

		optionsBuilder.UseNpgsql(
			$"User ID={user};Password={password};Server={host};Port={port};Database={name};Pooling=true;",
			options => options.EnableRetryOnFailure()).UseSnakeCaseNamingConvention();
	}

	protected override void OnModelCreating(ModelBuilder modelBuilder)
	{
		modelBuilder.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());
	}
}