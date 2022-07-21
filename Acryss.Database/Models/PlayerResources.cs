using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace Acryss.Database.Models;

public class PlayerResources
{
	/// <summary>
	///     The ID of the player.
	/// </summary>
	[Key]
	[Required]
	public ulong Id { get; set; }

	/// <summary>
	///     The amount of metal the player has.
	/// </summary>
	public double Metal { get; set; }

	/// <summary>
	///     The amount of crystal the player has.
	/// </summary>
	public double Crystal { get; set; }

	/// <summary>
	///     The amount of hydrogen the player has.
	/// </summary>
	public double Hydrogen { get; set; }

	/// <summary>
	///     The amount of EM the player has.
	/// </summary>
	public double ElectronPlasma { get; set; }

	/// <summary>
	///     The amount of energy the player has. This is calculated by adding the energy generation from the Geothermal
	///     Generator and the Fusion Reactor with their bonuses, then subtracting the usage from buildings.
	/// </summary>
	public double Energy { get; set; }

	/// <summary>
	///     The last time the resources were updated.
	/// </summary>
	[JsonIgnore]
	public DateTime LastUpdated { get; set; } = DateTime.UtcNow;

	/// <summary>
	///     The level of the Quarry building. Consumes <seealso cref="Metal" />, consumes <seealso cref="Energy" />.
	/// </summary>
	public int QuarryLevel { get; set; } = 0;

	/// <summary>
	///     The level of the Mine building. Produces <seealso cref="Crystal" />, consumes <seealso cref="Energy" />.
	/// </summary>
	public int MineLevel { get; set; } = 0;

	/// <summary>
	///     The level of the Hydrogen Generator building. Produces <seealso cref="Hydrogen" />, consumes
	///     <seealso cref="Energy" />.
	/// </summary>
	public int HydrogenGeneratorLevel { get; set; } = 0;

	/// <summary>
	///     The level of the Geothermal Generator building. Produces <seealso cref="Energy" />.
	/// </summary>
	public int GeothermalGeneratorLevel { get; set; } = 0;

	/// <summary>
	///     The level of the Fusion Reactor building. Produces <seealso cref="Energy" />, consumes large amounts of
	///     <seealso cref="Hydrogen" />.
	/// </summary>
	/// <remarks>
	///     The <see cref="Energy" /> generated increases by 10% with each level of
	/// </remarks>
	public int FusionReactorLevel { get; set; } = 0;

	/// <summary>
	///     The level of the Energy Condensation Centre. Produces <seealso cref="ElectronPlasma" />, consumes large amounts of
	///     <seealso cref="Energy" />.
	/// </summary>
	public int EnergyCondensationCentreLevel { get; set; } = 0;

	/// <summary>
	///     The <see cref="Player" /> this entity is for.
	/// </summary>
	[JsonIgnore]
	public Player Player { get; set; } = null!;
}