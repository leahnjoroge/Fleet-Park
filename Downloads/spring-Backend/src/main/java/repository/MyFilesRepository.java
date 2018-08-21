package repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import entity.MyFiles;
@Repository
public interface MyFilesRepository extends  JpaRepository <MyFiles,String> {

	
}
