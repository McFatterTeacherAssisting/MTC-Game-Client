document.addEventListener("keydown", function(event){
        switch(event.keyCode){
                case 37:{
                        player.moveLeft();
                        break;
                }
                case 38:{
                        player.moveUp();
			break;
                }
		case 40:{
			player.moveDown();
			break;
		}
		case 39:{
			player.moveRight();
			break;
		}
        }
}
