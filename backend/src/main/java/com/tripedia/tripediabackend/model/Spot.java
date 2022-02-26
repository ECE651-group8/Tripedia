package com.tripedia.tripediabackend.model;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "spot")
public class Spot {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long spotId;

    private String postalCode;

    private Long cost;

    @Column(nullable = false, name = "introduction")
    private String introduction;

    @Column(nullable = false, name = "spot_name")
    private String spotName;

    private Long popularity;

    @Column(nullable = false, name = "address")
    private String address;

    @OneToMany(mappedBy = "spot")
    List<Post> posts;


    public Long getSpotId() {
        return spotId;
    }

    public void setSpotId(Long spotId) {
        this.spotId = spotId;
    }

    public String getPostalCode() {
        return postalCode;
    }

    public void setPostalCode(String postalCode) {
        this.postalCode = postalCode;
    }

    public Long getCost() {
        return cost;
    }

    public void setCost(Long cost) {
        this.cost = cost;
    }

    public String getIntroduction() {
        return introduction;
    }

    public void setIntroduction(String introduction) {
        this.introduction = introduction;
    }

    public String getSpotName() {
        return spotName;
    }

    public void setSpotName(String spotName) {
        this.spotName = spotName;
    }

    public Long getPopularity() {
        return popularity;
    }

    public void setPopularity(Long popularity) {
        this.popularity = popularity;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    @Override
    public String toString() {
        return "Spot{" +
                "spotId=" + spotId +
                ", postalCode='" + postalCode + '\'' +
                ", cost=" + cost +
                ", introduction='" + introduction + '\'' +
                ", spotName='" + spotName + '\'' +
                ", popularity=" + popularity +
                ", address='" + address + '\'' +
                '}';
    }
}
