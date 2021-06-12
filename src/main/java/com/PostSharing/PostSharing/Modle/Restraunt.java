package com.PostSharing.PostSharing.Modle;

import javax.persistence.*;

@Entity
public class Restraunt {


    //    Restraunt details m
//            Address
//    Rest name
//    Food license
//    Contact number
//    Contact email
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String address;
    private String Foodlicense;
    private Long contact_numb;

    @Column(unique = true)
    private String email;
}
