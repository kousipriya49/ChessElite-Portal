package com.example.demo.Entity;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "academies")
public class AcademyEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "academy_name")
    private String academyName;

    @Column(name = "description")
    private String description;

    @Column(name = "address")
    private String address;

    @Column(name = "mobile")
    private String mobile;

    @Column(name = "email")
    private String email;

    // @Lob
    // @Column(name = "picture", columnDefinition = "text")  // Use text for URL strings
    // private String picture;  // Store picture as a URL string

    // Constructors
    public AcademyEntity() {
        // Default constructor
    }

    public AcademyEntity(String academyName, String description, String address, String mobile, String email) {
        this.academyName = academyName;
        this.description = description;
        this.address = address;
        this.mobile = mobile;
        this.email = email;
        // this.picture = picture;
    }

    // Getters and Setters
    // (Generated by your IDE or manually as needed)

    // ToString method
    @Override
    public String toString() {
        return "AcademyEntity{" +
                "id=" + id +
                ", academyName='" + academyName + '\'' +
                ", description='" + description + '\'' +
                ", address='" + address + '\'' +
                ", mobile='" + mobile + '\'' +
                ", email='" + email + '\'' +
                // ", picture='" + picture + '\'' +
                '}';
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getAcademyName() {
        return academyName;
    }

    public void setAcademyName(String academyName) {
        this.academyName = academyName;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getMobile() {
        return mobile;
    }

    public void setMobile(String mobile) {
        this.mobile = mobile;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    // public String getPicture() {
    //     return picture;
    // }

    // public void setPicture(String picture) {
    //     this.picture = picture;
    // }

    // Equals and HashCode methods
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        AcademyEntity that = (AcademyEntity) o;
        return Objects.equals(id, that.id) &&
                Objects.equals(academyName, that.academyName) &&
                Objects.equals(description, that.description) &&
                Objects.equals(address, that.address) &&
                Objects.equals(mobile, that.mobile) &&
                Objects.equals(email, that.email) ;
                // Objects.equals(picture, that.picture);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, academyName, description, address, mobile, email);
    }
}
