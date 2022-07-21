using System.ComponentModel.DataAnnotations;

namespace Acryss.Database.Models;

public class Universe
{
	[Key]
	[Required]
	public ulong Id { get; set; }

	public IEnumerable<Player> Players { get; set; } = null!;
}