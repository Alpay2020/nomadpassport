package de.neuefische.passportpages.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Trip {

    private Date dateTripStart;
    private Date dateTripEnd;

}
