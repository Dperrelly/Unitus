#pragma strict

var movement : ShipMovement;
var tiltFactor : float;

function Update () {
	transform.rotation = Quaternion.Euler (movement.yTranslation * tiltFactor, 0 , 90);
}