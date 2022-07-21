namespace Acryss.Database.Models;

public enum AllianceMemberLevel
{
	/// <summary>
	///     The creator of the alliance, can be transferred.
	/// </summary>
	Leader,

	/// <summary>
	///     An administrator, they can change the alliance's information and mods.
	/// </summary>
	Administrator,

	/// <summary>
	///     A moderator, they can manage the applications as well as kick members.
	/// </summary>
	Moderator,

	/// <summary>
	///     A member of the alliance, they enjoy the benefits of being part of the alliance, including non-aggression pacts.
	/// </summary>
	Member,

	/// <summary>
	///     An applicant member, they have no access to alliance information, nor it shows in their profile, but it prevents
	///     the player from joining other alliances.
	/// </summary>
	Applicant
}