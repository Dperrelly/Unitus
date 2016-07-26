#pragma strict
var speed : float = 2000;
function Start () {
    GetComponent.<Rigidbody>().AddForce(transform.forward*speed);
}

function Update () {

}