using System.ComponentModel.DataAnnotations;

namespace Acryss.Database.Models;

public class Player
{
	[Key]
	[Required]
	public ulong Id { get; set; }

	[Key]
	[Required]
	public ulong UniverseId { get; set; }

	/// <summary>
	///     The defence information.
	/// </summary>
	public PlayerDefences Defences { get; set; } = null!;

	/// <summary>
	///     The facility information.
	/// </summary>
	public PlayerFacilities Facilities { get; set; } = null!;

	/// <summary>
	///     The fleet information.
	/// </summary>
	public PlayerFleet Fleet { get; set; } = null!;

	/// <summary>
	///     The research information.
	/// </summary>
	public PlayerResearch Research { get; set; } = null!;

	/// <summary>
	///     The resource information.
	/// </summary>
	public PlayerResources Resources { get; set; } = null!;

	/// <summary>
	///     The information this player is for.
	/// </summary>
	public Universe Universe { get; set; } = null!;

	/// <summary>
	///     The alliance membership the player has.
	/// </summary>
	public AllianceMember? AllianceMember { get; set; }
}