using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace Acryss.Database.Models;

public class PlayerFleet
{
	/// <summary>
	///     The ID of the player.
	/// </summary>
	[Key]
	[Required]
	public ulong Id { get; set; }

	/// <summary>
	///     A fast ship with minimal attack and high storage capacity.
	/// </summary>
	public ulong CargoShip { get; set; }

	/// <summary>
	///     The larger version of <see cref="CargoShip" />.
	/// </summary>
	public ulong HeavyCargoShip { get; set; }

	/// <summary>
	///     Designed to intercept Fighters while being more durable than the <see cref="PlayerDefences.RailgunTurret" />.
	/// </summary>
	public ulong InterceptorJet { get; set; }

	/// <summary>
	///     Built by the <see cref="PlayerFacilities.SpaceShipyard" />, it provides very high shield capability for the planet.
	/// </summary>
	public ulong Hivii { get; set; }

	/// <summary>
	///     A ship designed to serve as fodder against strong defences.
	/// </summary>
	public ulong Fighter { get; set; }

	/// <summary>
	///     A heavier and more powerful version of the <see cref="Fighter" />.
	/// </summary>
	public ulong AdvancedFighter { get; set; }

	/// <summary>
	///     A very fast ship designed to clear the enemy's fodder.
	/// </summary>
	public ulong Cruiser { get; set; }

	/// <summary>
	///     A ship with a very high firing rate, stronger than <see cref="Cruiser" />.
	/// </summary>
	public ulong Battleship { get; set; }

	/// <summary>
	///     A faster alternative of the <see cref="Cruiser" />.
	/// </summary>
	public ulong Battlecruiser { get; set; }

	/// <summary>
	///     A ship with devastating power designed to clear the enemy's defences.
	/// </summary>
	public ulong Bomber { get; set; }

	/// <summary>
	///     A ship with devastating power designed to clear the enemy's fleet.
	/// </summary>
	public ulong Destroyer { get; set; }

	/// <summary>
	///     An upgraded version of the <see cref="Bomber" />, with a Warp Drive and powerful Plasma-based cannons.
	/// </summary>
	public ulong BallistaBomber { get; set; }

	/// <summary>
	///     An upgraded version of the <see cref="Destroyer" />, with a Warp Drive and powerful Plasma-based cannons.
	/// </summary>
	public ulong BallistaDestroyer { get; set; }

	/// <summary>
	///     A lightweight and very fast ship designed to make espionage reports on other planets.
	/// </summary>
	public ulong EspionageProbe { get; set; }

	/// <summary>
	///     The <see cref="Player" /> this entity is for.
	/// </summary>
	[JsonIgnore]
	public Player Player { get; set; } = null!;
}