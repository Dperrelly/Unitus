#pragma strict

var speed : float = 300;

function Start(){
    GetComponent.<Rigidbody2D>().AddForce(transform.right*-speed);
}

public function Update() {

}

