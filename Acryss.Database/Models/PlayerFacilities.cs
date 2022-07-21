using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace Acryss.Database.Models;

public class PlayerFacilities
{
	/// <summary>
	///     The ID of the player.
	/// </summary>
	[Key]
	[Required]
	public ulong Id { get; set; }

	/// <summary>
	///     Accelerates building speed by 10% per level.
	/// </summary>
	public int RobotFactory { get; set; }

	/// <summary>
	///     Accelerates building speed by 25% per level.
	/// </summary>
	/// <remarks>
	///     <list type="bullet">
	///         <item>Requires <see cref="RobotFactory" /> level 8.</item>
	///         <item>Requires <see cref="PlayerResearch.Energy" /> level 8.</item>
	///         <item>Requires <see cref="PlayerResearch.Computing" /> level 8.</item>
	///     </list>
	/// </remarks>
	public int AdvancedFactory { get; set; }

	/// <summary>
	///     Allows atmosphere-capable ships to be built, as well as planet defences.
	/// </summary>
	/// <remarks>
	///     <list type="bullet">
	///         <item>Requires <see cref="RobotFactory" /> level 2.</item>
	///     </list>
	/// </remarks>
	public int Shipyard { get; set; }

	/// <summary>
	///     Allows space-exclusive ships to be built, as well as orbital defences.
	/// </summary>
	/// <remarks>
	///     <list type="bullet">
	///         <item>Requires <see cref="RobotFactory" /> level 6.</item>
	///         <item>Requires <see cref="Shipyard" /> level 4.</item>
	///     </list>
	/// </remarks>
	public int SpaceShipyard { get; set; }

	/// <summary>
	///     Allows research to be done.
	/// </summary>
	/// <remarks>
	///     <list type="bullet">
	///         <item>Requires <see cref="RobotFactory" /> level 2.</item>
	///     </list>
	/// </remarks>
	public int ResearchCentre { get; set; }

	/// <summary>
	///     The <see cref="Player" /> this entity is for.
	/// </summary>
	[JsonIgnore]
	public Player Player { get; set; } = null!;
}