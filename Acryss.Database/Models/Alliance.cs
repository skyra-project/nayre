using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Acryss.Database.Models;

public class Alliance
{
	/// <summary>
	///     The ID of the alliance.
	/// </summary>
	[Key]
	[Required]
	[DatabaseGenerated(DatabaseGeneratedOption.Identity)]
	public ulong Id { get; set; }

	/// <summary>
	///     The ID of the universe the alliance is from.
	/// </summary>
	[Key]
	[Required]
	public ulong UniverseId { get; set; }

	/// <summary>
	///     The name of the alliance.
	/// </summary>
	[Required]
	public string Name { get; set; } = null!;

	/// <summary>
	///     The alliances that have a non-aggression pact with the alliance.
	/// </summary>
	public IEnumerable<Alliance> Allies { get; set; } = null!;

	/// <summary>
	///     The members of the alliance.
	/// </summary>
	public IEnumerable<AllianceMember> Members { get; set; } = null!;

	/// <summary>
	///     The universe the alliance is from.
	/// </summary>
	public Universe Universe { get; set; } = null!;
}