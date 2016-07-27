#pragma strict

var power : int = 3;

function OnTriggerEnter2D(other : Collider2D) {
	
    if(other.tag == "Enemy"){
        var otherScript = other.GetComponent.<EnemyHealth>();
        otherScript.takeDamage(power);
        Destroy(gameObject);
    }
}