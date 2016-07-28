#pragma strict

var lifetime : float = 0.1;

function Start() {
    yield WaitForSeconds(lifetime);

    Destroy(gameObject);
}