#pragma strict

function OnTriggerEnter2D(other : Collider2D) {
    if(other.tag == "Enemy"){
        other.GetComponent.<EnemyMovement>().enabled = true;
    }
}