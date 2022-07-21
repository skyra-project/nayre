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
	///     The <see cref="Player" /> this entity is for.
	/// </summary>
	[JsonIgnore]
	public Player Player { get; set; } = null!;
}