using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace Acryss.Database.Models;

public class PlayerResearch
{
	/// <summary>
	///     The ID of the player.
	/// </summary>
	[Key]
	[Required]
	public ulong Id { get; set; }

	/// <summary>
	///     <list type="bullet">
	///         <item>Increases <see cref="PlayerResources.Energy" /> generation by 10% per level.</item>
	///     </list>
	/// </summary>
	public int Energy { get; set; }

	/// <summary>
	///     <list type="bullet">
	///         <item>Increases <see cref="PlayerResources.Crystal" /> from Quarry by 10% per level.</item>
	///     </list>
	/// </summary>
	/// <remarks>
	///     <list type="bullet">
	///         <item>Requires <see cref="Energy" /> level 2.</item>
	///     </list>
	/// </remarks>
	public int Electromagnet { get; set; }

	/// <summary>
	///     <list type="bullet">
	///         <item>Increases the damage dealt by Laser-powered weapons by 5% per level.</item>
	///         <item>Decreases cost of Laser-powered defences by 5% per level.</item>
	///     </list>
	/// </summary>
	/// <remarks>
	///     <list type="bullet">
	///         <item>Requires <see cref="PlayerFacilities.ResearchCentre" /> level 2.</item>
	///         <item>Requires <see cref="Energy" /> level 4.</item>
	///     </list>
	/// </remarks>
	public int Laser { get; set; }

	/// <summary>
	///     <list type="bullet">
	///         <item>Increases the damage dealt by Ion-powered weapons by 5% per level.</item>
	///     </list>
	/// </summary>
	/// <remarks>
	///     <list type="bullet">
	///         <item>Requires <see cref="PlayerFacilities.ResearchCentre" /> level 4.</item>
	///         <item>Requires <see cref="Energy" /> level 6.</item>
	///     </list>
	/// </remarks>
	public int Ion { get; set; }

	/// <summary>
	///     <list type="bullet">
	///         <item>Increases the damage dealt by Plasma-powered weapons by 5% per level.</item>
	///     </list>
	/// </summary>
	/// <remarks>
	///     <list type="bullet">
	///         <item>Requires <see cref="PlayerFacilities.ResearchCentre" /> level 6.</item>
	///         <item>Requires <see cref="Energy" /> level 8.</item>
	///     </list>
	/// </remarks>
	public int Plasma { get; set; }

	/// <summary>
	///     <list type="bullet">
	///         <item>Increases the speed from Combustion Drive-powered ships by 5% per level.</item>
	///     </list>
	/// </summary>
	/// <remarks>
	///     <list type="bullet">
	///         <item>Requires <see cref="Energy" /> level 2.</item>
	///     </list>
	/// </remarks>
	public int CombustionDrive { get; set; }

	/// <summary>
	///     <list type="bullet">
	///         <item>Increases the speed from Ion Drive-powered ships by 5% per level.</item>
	///     </list>
	/// </summary>
	/// <remarks>
	///     <list type="bullet">
	///         <item>Requires <see cref="PlayerFacilities.ResearchCentre" /> level 4.</item>
	///         <item>Requires <see cref="Ion" /> level 2.</item>
	///     </list>
	/// </remarks>
	public int IonDrive { get; set; }

	/// <summary>
	///     <list type="bullet">
	///         <item>Increases the speed from Impulse Drive-powered ships by 10% per level.</item>
	///     </list>
	/// </summary>
	/// <remarks>
	///     <list type="bullet">
	///         <item>Requires <see cref="PlayerFacilities.ResearchCentre" /> level 6.</item>
	///         <item>Requires <see cref="Energy" /> level 6.</item>
	///     </list>
	/// </remarks>
	public int ImpulseDrive { get; set; }

	/// <summary>
	///     <list type="bullet">
	///         <item>Increases the speed from Warp Drive-powered ships by 5% per level.</item>
	///     </list>
	/// </summary>
	/// <remarks>
	///     <list type="bullet">
	///         <item>Requires <see cref="PlayerFacilities.ResearchCentre" /> level 10.</item>
	///         <item>Requires <see cref="Energy" /> level 10.</item>
	///     </list>
	/// </remarks>
	public int WarpDrive { get; set; }

	/// <summary>
	///     <list type="bullet">
	///         <item>Unlocks Resource Information at Level 1.</item>
	///         <item>Unlocks Defence Information at Level 2.</item>
	///         <item>Unlocks Fleet Information at Level 4.</item>
	///         <item>Unlocks Research Information at Level 6.</item>
	///     </list>
	/// </summary>
	/// <remarks>
	///     <list type="bullet">
	///         <item>Requires <see cref="PlayerFacilities.ResearchCentre" /> level 4.</item>
	///         <item>Requires <see cref="CombustionDrive" /> level 1.</item>
	///     </list>
	/// </remarks>
	public int Espionage { get; set; }

	/// <summary>
	///     <list type="bullet">
	///         <item>Increases Research speed by 10% per level.</item>
	///     </list>
	/// </summary>
	/// <remarks>
	///     <list type="bullet">
	///         <item>Requires <see cref="PlayerFacilities.ResearchCentre" /> level 4.</item>
	///     </list>
	/// </remarks>
	public int Computing { get; set; }

	/// <summary>
	///     Increases by 10% per level the total damage from ships and defences.
	/// </summary>
	/// <remarks>
	///     <list type="bullet">
	///         <item>Requires <see cref="PlayerFacilities.ResearchCentre" /> level 3.</item>
	///     </list>
	/// </remarks>
	public int Attack { get; set; }

	/// <summary>
	///     Increases by 10% per level the total shields from ships and defences.
	/// </summary>
	/// <remarks>
	///     <list type="bullet">
	///         <item>Requires <see cref="PlayerFacilities.ResearchCentre" /> level 3.</item>
	///     </list>
	/// </remarks>
	public int Shield { get; set; }

	/// <summary>
	///     Increases by 10% per level the total hull from ships and defences.
	/// </summary>
	/// <remarks>
	///     <list type="bullet">
	///         <item>Requires <see cref="PlayerFacilities.ResearchCentre" /> level 3.</item>
	///     </list>
	/// </remarks>
	public int Hull { get; set; }

	/// <summary>
	///     The <see cref="Player" /> this entity is for.
	/// </summary>
	[JsonIgnore]
	public Player Player { get; set; } = null!;
}