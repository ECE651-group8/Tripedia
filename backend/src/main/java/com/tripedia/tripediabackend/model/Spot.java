package com.tripedia.tripediabackend.model;

import javax.persistence.*;

@Entity
@Table(name = "spot")
public class Spot {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long spotId;

    @Column(nullable = false, name = "address")
    private String address;

    private Long popularity;

    @Column(nullable = false, name = "spot_name")
    private String spotName;

    @Column(nullable = false, name = "introduction")
    private String introduction;

    public Spot(Long spotId, String address, Long popularity, String spotName, String introduction) {
        this.spotId = spotId;
        this.address = address;
        this.popularity = popularity;
        this.spotName = spotName;
        this.introduction = introduction;
    }

    public Long getSpotId() {
        return spotId;
    }

    public void setSpotId(Long spotId) {
        this.spotId = spotId;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public Long getPopularity() {
        return popularity;
    }

    public void setPopularity(Long popularity) {
        this.popularity = popularity;
    }

    public String getSpotName() {
        return spotName;
    }

    public void setSpotName(String spotName) {
        this.spotName = spotName;
    }

    public String getIntroduction() {
        return introduction;
    }

    public void setIntroduction(String introduction) {
        this.introduction = introduction;
    }

    @Override
    public String toString() {
        return "Spot{" +
                "spotId=" + spotId +
                ", address='" + address + '\'' +
                ", popularity=" + popularity +
                ", spotName='" + spotName + '\'' +
                ", introduction='" + introduction + '\'' +
                '}';
    }
}
