#pragma strict

var power : int = 3;
var explosion : GameObject;

function explode(){
    Instantiate(explosion, transform.position, explosion.transform.rotation); 
	Destroy(gameObject);
}

function OnTriggerEnter2D(other : Collider2D) {
	
    if(other.tag == "Enemy"){
        var otherScript = other.GetComponent.<EnemyHealth>();
        otherScript.takeDamage(power);
        explode();
    }
}