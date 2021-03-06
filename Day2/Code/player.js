player = new Object();

player.x = viewport.width/2;
player.y = viewport.height/2;
player.image = new Image();
player.image.src = "assets/Player.png";
player.width = 90;
player.height = 90;
player.isAttacking = false

player.draw = function()
{
	renderer.ctx.drawImage( player.image, player.x, player.y, player.width, player.height ); 
};

player.isTouching = function( gameObject )
{ 
	// #Are they touching?
	return ( player.x <= (gameObject.x + gameObject.width) 
	     	 && gameObject.x <= (player.x + player.width)
		 	 && player.y <= (gameObject.y + gameObject.height)
		 	 && gameObject.y <= (player.y + player.height) ); 
};

player.move = function(x, y)
{
	player.x = x;
	player.y = y;
}


player.attack = function()
{
	console.log("im attacking")
	player.isAttacking = true
};