package lab.controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;

import entity.MyFiles;
import repository.MyFilesRepository;

public class myFilesService {
	@Autowired 
    private static MyFilesRepository myFilesRepository;
//	private MyFilesRepository myFilesRepository;
	
	
	 public static void saveMyFile(MyFiles myFile) {
		 myFilesRepository.save(myFile);
	 
	 }


	public static ArrayList<MyFiles> getAllMyFiles() {
		// TODO Auto-generated method stub
		return null;
	}
	
	

}
