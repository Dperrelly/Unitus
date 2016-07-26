#pragma strict

var startingHealth : int = 5;

private var currentHealth : int;

function Start () {
    currentHealth = startingHealth;
}

public function die(){
    Destroy(gameObject);
}

public function takeDamage (damage : int) {
    currentHealth -= damage;
    if(currentHealth <= 0) die();
}