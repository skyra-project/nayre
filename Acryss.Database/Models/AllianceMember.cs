using System.ComponentModel.DataAnnotations;

namespace Acryss.Database.Models;

public class AllianceMember
{
	/// <summary>
	///     The ID of the alliance.
	/// </summary>
	[Key]
	[Required]
	public ulong AllianceId { get; set; }

	public Alliance Alliance { get; set; } = null!;

	/// <summary>
	///     The ID of the player.
	/// </summary>
	[Key]
	[Required]
	public ulong PlayerId { get; set; }

	public Player Player { get; set; } = null!;

	/// <summary>
	///     The hierarchy level the player has.
	/// </summary>
	public AllianceMemberLevel Level { get; set; }
}