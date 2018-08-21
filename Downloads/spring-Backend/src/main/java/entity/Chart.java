package entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Chart {
	@Id
@GeneratedValue(strategy = GenerationType.AUTO)
int Id;
@Column
private int NoTrucks;
@Column
private int NoSpots;
public int getId() {
	return Id;
}
public void setId(int id) {
	Id = id;
}
public int getNoTrucks() {
	return NoTrucks;
}
public void setNoTrucks(int noTrucks) {
	NoTrucks = noTrucks;
}
public int getNoSpots() {
	return NoSpots;
}
public void setNoSpots(int noSpots) {
	NoSpots = noSpots;
}
public Chart() {
	super();
	// TODO Auto-generated constructor stub
}

}
