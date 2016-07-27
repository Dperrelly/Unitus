#pragma strict

var speed : float = 10;
var cameraTransform : Transform;
var col : BoxCollider2D;

public function FixedUpdate() {

    // Get the horizontal and vertical axis.
    // The value is in the range -1 to 1
    var yTranslation : float = Input.GetAxisRaw ("Vertical") * speed;
    var xTranslation : float = Input.GetAxisRaw ("Horizontal") * speed;
		
    // Make it move 10 meters per second instead of 10 meters per frame...
    yTranslation *= Time.deltaTime;
    xTranslation *= Time.deltaTime;
		
    // Translate
    transform.Translate (yTranslation, -xTranslation, 0);
   
}

public function Update(){
	//calculate camera edge
    var xMin = cameraTransform.position.x - 8.904 + col.bounds.extents.x;
    var xMax = cameraTransform.position.x + 8.904 - col.bounds.extents.x;
    var yMin = cameraTransform.position.y - 5.003 + col.bounds.extents.y;
    var yMax = cameraTransform.position.y + 5.003 - col.bounds.extents.y;


    //stay inside camera
    transform.position = new Vector3 
    (
        Mathf.Clamp (transform.position.x, xMin, xMax),
        Mathf.Clamp (transform.position.y, yMin, yMax),
        0.0
    );
}



