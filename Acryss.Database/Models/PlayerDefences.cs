using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace Acryss.Database.Models;

public class PlayerDefences
{
	/// <summary>
	///     The ID of the player.
	/// </summary>
	[Key]
	[Required]
	public ulong Id { get; set; }

	/// <summary>
	///     The first available defence unit, and the cheapest. They’re cannon fodder units and suffer from very high
	///     rapid-fire against them.
	/// </summary>
	/// <remarks>
	///     <list type="bullet">
	///         <item>Requires <see cref="PlayerFacilities.Shipyard" /> level 1.</item>
	///         <item>Requires <see cref="PlayerResearch.Electromagnet" /> level 1.</item>
	///     </list>
	/// </remarks>
	public ulong RailgunTurret { get; set; }

	/// <summary>
	///     Cannon fodder unit, more expensive than the Railgun Turret, but better against Cruisers.
	/// </summary>
	/// <remarks>
	///     <list type="bullet">
	///         <item>Requires <see cref="PlayerFacilities.Shipyard" /> level 2.</item>
	///         <item>Requires <see cref="PlayerResearch.Laser" /> level 2.</item>
	///     </list>
	/// </remarks>
	public ulong LaserTurret { get; set; }

	/// <summary>
	///     The more expensive and powerful option from Laser Turret, and able to one-shot Fighters.
	/// </summary>
	/// <remarks>
	///     <list type="bullet">
	///         <item>Requires <see cref="PlayerFacilities.Shipyard" /> level 4.</item>
	///         <item>Requires <see cref="PlayerResearch.Laser" /> level 6.</item>
	///     </list>
	/// </remarks>
	public ulong VanguardTurret { get; set; }

	/// <summary>
	///     Relatively affordable turret with very high shields.
	/// </summary>
	/// <remarks>
	///     <list type="bullet">
	///         <item>Requires <see cref="PlayerFacilities.Shipyard" /> level 6.</item>
	///         <item>Requires <see cref="PlayerResearch.Ion" /> level 4.</item>
	///         <item>Requires <see cref="PlayerResearch.Shield" /> level 4.</item>
	///     </list>
	/// </remarks>
	public ulong IonTurret { get; set; }

	/// <summary>
	///     The second strongest defensive unit, they are massive kinetic weapons able to take down Cruisers alone, and
	///     Battleships too with relative ease.
	/// </summary>
	/// <remarks>
	///     <list type="bullet">
	///         <item>Requires <see cref="PlayerFacilities.Shipyard" /> level 8.</item>
	///         <item>Requires <see cref="PlayerResearch.Electromagnet" /> level 6.</item>
	///         <item>Requires <see cref="PlayerResearch.Attack" /> level 6.</item>
	///     </list>
	/// </remarks>
	public ulong KineticCannon { get; set; }

	/// <summary>
	///     The most powerful turret.
	/// </summary>
	/// <remarks>
	///     <list type="bullet">
	///         <item>Requires <see cref="PlayerFacilities.Shipyard" /> level 8.</item>
	///         <item>Requires <see cref="PlayerResearch.Plasma" /> level 6.</item>
	///         <item>Requires <see cref="PlayerResearch.Attack" /> level 6.</item>
	///     </list>
	/// </remarks>
	public ulong NaeriaTurret { get; set; }

	/// <summary>
	///     A basic shield layer, it can stop Espionage Probes and Cargo ships from successfully penetrating the planet’s
	///     defences.
	/// </summary>
	/// <remarks>
	///     <list type="bullet">
	///         <item>Requires <see cref="PlayerFacilities.Shipyard" /> level 2.</item>
	///         <item>Requires <see cref="PlayerResearch.Shield" /> level 3.</item>
	///     </list>
	/// </remarks>
	public bool ShieldDome { get; set; }

	/// <summary>
	///     Much stronger than the Shield Dome, offers several times the shields and stops Fighters in any amount from doing
	///     any harm to the planet.
	/// </summary>
	/// <remarks>
	///     <list type="bullet">
	///         <item>Requires <see cref="PlayerFacilities.Shipyard" /> level 4.</item>
	///         <item>Requires <see cref="PlayerResearch.Shield" /> level 6.</item>
	///     </list>
	/// </remarks>
	public bool HeavyShieldDome { get; set; }

	/// <summary>
	///     The <see cref="Player" /> this entity is for.
	/// </summary>
	[JsonIgnore]
	public Player Player { get; set; } = null!;
}