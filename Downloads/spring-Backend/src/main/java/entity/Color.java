package entity;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

public enum Color {
WHITE ("White"),
BLACK ("Black"),
BLUE("Blue"),
GREEN("Green"),
RED("Red"),
YELLOW("Yellow"),
PURPLE ("Purple"),
OTHERS("Others");
	@Id
	  @GeneratedValue(strategy = GenerationType.AUTO)
private int id;
	@Column
private String stringVal;

	public int getId() {
	return id;
}

public void setId(int id) {
	this.id = id;
}

	Color(String stringVal){
		this.stringVal= stringVal;
	}
	
	public String getStringVal() {
		return stringVal;
	}
	public void getStringVal(String stringVal) {
		this.stringVal = stringVal;
		
	}
	public static Color getColor(String stringVal) {
		switch (stringVal) {
		case "White":
			return Color.WHITE;
		case "Black":
			return Color.BLACK;
		case "Green":
			return Color.GREEN;
		case "Red":
			return Color.RED;
		case "Yellow":
			return Color.YELLOW;
		case "Purple":
			return Color.PURPLE;
			
			default:
				return Color.OTHERS;
	}
	}
}

