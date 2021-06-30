var iFileName = "IK - Pistol, Repeating.js";

WeaponsList["pistol, repeating"] = {
	name : "Repeating Pistol",
	source : ["IK:R", 198],
	defaultExcluded : false,
	regExpSearch : /^(?=.*repeating)(?=.*pistol).*$/i,
	type : "Simple Firearms",
	ability : 2,
	abilitytodamage : true,
	damage : [1, 10, "piercing"],
	range : "40/120",
	description : "Firearm, Light, Magazine(5), Pistol",
	tooltip : "This firarm has the added feature of being able to fire 5 times before reloading",
	special : false,
	list : "ranged",
	weight : 6,
	dc : false,
	modifiers : [0, 0],
	monkweapon : false,
	isMagicWeapon : false,
	isAlwaysProf : false,
	ammo : "bullet",
};