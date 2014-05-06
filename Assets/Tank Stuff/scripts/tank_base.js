var speedRotate = 6;
var speed = 5;
var gravity = 20;
private var movement : Vector3 = Vector3.zero;
private var rotation : Vector3 = Vector3.zero;

function Update () 
{
var controller = GetComponent(CharacterController);
if(controller.isGrounded) {
	movement = Vector3(0,0,Input.GetAxis("Vertical"));
	rotation = Vector3( 0, Input.GetAxis("Horizontal"),0);
	
	movement = transform.TransformDirection(movement);
	movement *= speed;
	rotation *= speedRotate;
}

controller.Move(movement * Time.deltaTime);

transform.Rotate ( Vector3(0,rotation.y,0));

movement.y -= gravity * Time.deltaTime;


}