package de.neuefische.passportpages.controller;

import de.neuefische.passportpages.model.VisaInfo;
import de.neuefische.passportpages.service.VisaInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import java.util.Optional;

@RestController
@RequestMapping("api/visainfo")
public class VisaInfoController {

    private final VisaInfoService visaInfoService;

    @Autowired
    public VisaInfoController(VisaInfoService visaInfoService) {
        this.visaInfoService = visaInfoService;
    }

    @GetMapping("{id}")
    public VisaInfo getVisaInfoByDestination(@PathVariable String id) {
        Optional<VisaInfo> visaInfoOptional = visaInfoService.getVisaInfo(id);
        if (visaInfoOptional.isPresent()) {
            return visaInfoOptional.get();
        }
        throw new ResponseStatusException(HttpStatus.NOT_FOUND, "visa information about destination with ID " + id + " does not exist");
    }
    @GetMapping("random")
    public Optional<VisaInfo> getRandomVisaInfo() {
            return visaInfoService.getRandomVisaInfo();
        }
 }

