package repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import entity.User;


@Repository 
public interface UserRepository extends JpaRepository<User,String> {

	//User findByEmailandPassword(String password, String email);

	
	
////@Query("Select U form User U where email=:email and password=:password")
//	public  User login(@Param("email") String email, @Param("password")String password);
// User findByEmailandPassword(String password, String email);





}
