package com.PostSharing.PostSharing.Modle;

import net.bytebuddy.dynamic.loading.InjectionClassLoader;

import javax.persistence.*;

@Entity
public class Menu {


    //    Menu m
//    Item name
//    Price
//

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String iteamName;
    private Double price;

    @OneToOne
    private Restraunt restraunt;


    public Menu(long id) {
        this.id = id;
    }

    public Menu(long id, String iteamName, Double price) {
        this.id = id;
        this.iteamName = iteamName;
        this.price = price;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getIteamName() {
        return iteamName;
    }

    public void setIteamName(String iteamName) {
        this.iteamName = iteamName;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }


}
