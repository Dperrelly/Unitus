#pragma strict

var startingHealth : int = 5;
var pickup1 : GameObject;

private var currentHealth : int;

function Start () {
    currentHealth = startingHealth;
}

public function die(){
	if(Random.value < .3) var pickup = Instantiate(pickup1, transform.position, Quaternion.identity); 
    Destroy(gameObject);
}

public function takeDamage (damage : int) {
    currentHealth -= damage;
    if(currentHealth <= 0) die();
}