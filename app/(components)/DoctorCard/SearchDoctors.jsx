import {
    Autocomplete,
    TextField,
    InputAdornment,
    Box,
    Popper,
    Button,
    Grid,
    List,
    ListItem,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { KeyboardArrowDown } from '@mui/icons-material';
import { useState, useEffect, useRef } from 'react';
import { MedantaOrange } from '../Global';
import { useRouter } from 'next/navigation';
import { setDoctorID } from '@/redux/features/doctorSlice';
import { useDispatch } from 'react-redux';
import Link from 'next/link';

const CustomPopper = ({
    inputValue,
    anchorEl,
    doctorList,
    specialityList,
    handleDoctorClick,
    handleSpecialityClick,
    children,
    doctors,
    setOpen,
    setInputValue,
    ...other
}) => {
    const uniqueDepartments = Array.from(
        new Map(doctors.map((doc) => [doc.Department, doc])).values()
    );
    console.log("departments=", uniqueDepartments);
    const router = useRouter();
    const dispatch = useDispatch();

    return (
        <Popper
            {...other}
            anchorEl={anchorEl}
            placement="bottom-start"
            modifiers={[{ name: 'offset', options: { offset: [0, 8] } }]}
            style={{ zIndex: 1300, display: 'flex' }}
        >
            <Box
                onMouseDown={(e) => e.stopPropagation()}
                sx={{
                    bgcolor: 'white',
                    borderRadius: 5,
                    boxShadow: 3,
                    overflowY: 'auto',
                    display: 'flex',
                    flexDirection: 'column',
                    width: '600px',
                }}
            >
                {inputValue.length > 0 && (
                    <Box
                        sx={{
                            boxShadow: 'none',
                            border: 'none',
                            '& .MuiAutocomplete-paper': {
                                boxShadow: 'none !important',
                                border: 'none !important',
                            },
                            '& .MuiAutocomplete-option': {
                                color: 'black',
                                '&:hover': {
                                    backgroundColor: '#f1f1f1',
                                },
                            },
                        }}
                    >
                        {children}
                    </Box>
                )}

                <Grid container p={1} borderTop="1px solid #eee" gap={3} paddingX={2}>
                    {/* Doctors Button */}
                    <Grid item xs={4}>
                        <Button
                            sx={{
                                color: 'black',
                                borderBottom: '1px gray solid',
                                justifyContent: 'space-between',
                                textTransform: 'none',
                                borderRadius: '0px',
                                fontWeight: 'bold',
                            }}
                            fullWidth
                            endIcon={<KeyboardArrowDown sx={{ color: 'gray' }} />}
                            onMouseDown={(e) => e.preventDefault()}
                            onClick={handleDoctorClick}
                        >
                            Doctors
                        </Button>
                        {doctorList && inputValue.length === 0 && (
                            <Box
                                sx={{
                                    // border: '1px gray solid',
                                    padding: 1,
                                    position: 'absolute',
                                    backgroundColor: 'white',
                                    borderRadius: '0px 0px 10px 10px',
                                    marginTop: 1,
                                }}
                                boxShadow={3}
                            >
                                <Box
                                    sx={{
                                        maxHeight: 200,
                                        overflowY: 'auto',
                                        display: 'flex',
                                        width: '300px',
                                    }}
                                >
                                    <List>
                                        {doctors.map((doctor, index) => (
                                            <ListItem
                                                key={index}
                                                sx={{ cursor: 'pointer' }}
                                                onMouseDown={(e) => e.preventDefault()}
                                                onClick={() => {
                                                    setOpen(false);
                                                    setInputValue(doctor.name);
                                                    dispatch(setDoctorID(doctor.id));
                                                    router.push('/consultants/doctor_details');
                                                }}
                                            >
                                                {doctor.name}
                                            </ListItem>
                                        ))}
                                    </List>
                                </Box>
                            </Box>
                        )}
                    </Grid>

                    {/* Speciality Button */}
                    <Grid item xs={4}>
                        <Button
                            sx={{
                                color: 'black',
                                borderBottom: '1px gray solid',
                                justifyContent: 'space-between',
                                textTransform: 'none',
                                borderRadius: '0px',
                                fontWeight: 'bold',
                            }}
                            fullWidth
                            endIcon={<KeyboardArrowDown sx={{ color: 'gray' }} />}
                            onMouseDown={(e) => e.preventDefault()}
                            onClick={handleSpecialityClick}
                        >
                            Speciality
                        </Button>
                        {specialityList && inputValue.length === 0 && (
                            <Box
                                sx={{
                                    // border: '1px gray solid',
                                    padding: 1,
                                    position: 'absolute',
                                    backgroundColor: 'white',
                                    borderRadius: '0px 0px 10px 10px',
                                    marginTop: 1,
                                }}
                                boxShadow={3}
                            >
                                <Box
                                    sx={{
                                        maxHeight: 200,
                                        overflowY: 'auto',
                                        display: 'flex',
                                        width: '300px',
                                    }}
                                >
                                    <List>
                                        {uniqueDepartments.map((specialty, index) => (
                                            <ListItem key={index}>{specialty}</ListItem>
                                        ))}
                                    </List>
                                </Box>
                            </Box>
                        )}
                    </Grid>
                </Grid>
            </Box>
        </Popper>
    );
};

const SearchDoctors = ({ doctors }) => {
    const [inputValue, setInputValue] = useState('');
    const dispatch = useDispatch();
    const router = useRouter();
    const [open, setOpen] = useState(false);
    const [doctorList, setDoctorList] = useState(false);
    const [specialityList, setSpecialityList] = useState(false);

    const wrapperRef = useRef();

    // Close dropdowns on outside click
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                setDoctorList(false);
                setSpecialityList(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleDoctorClick = (e) => {
        e.stopPropagation();
        setDoctorList((prev) => !prev);
        setSpecialityList(false);
        setInputValue('');
    };

    const handleSpecialityClick = (e) => {
        e.stopPropagation();
        setSpecialityList((prev) => !prev);
        setDoctorList(false);
        setInputValue('');
    };

    return (
        <Box ref={wrapperRef} display="flex" width="100%" flexDirection="column" position="relative">
            <Autocomplete
                options={doctors}
                disableCloseOnBlur
                disableCloseOnSelect
                getOptionLabel={(option) => option.name || ''}
                freeSolo
                open={open}
                onOpen={() => setOpen(true)}
                onClose={() => setOpen(false)}
                inputValue={inputValue}
                onInputChange={(event, newInputValue) => {
                    setInputValue(newInputValue);
                }}
                onChange={(event, newValue) => {
                    dispatch(setDoctorID(newValue.id));
                    router.push('/consultants/doctor_details');
                    setOpen(false);
                }}
                PopperComponent={(props) => (
                    <CustomPopper
                        {...props}
                        inputValue={inputValue}
                        doctorList={doctorList}
                        setOpen={setOpen}
                        doctors={doctors}
                        specialityList={specialityList}
                        handleDoctorClick={handleDoctorClick}
                        handleSpecialityClick={handleSpecialityClick}
                        setInputValue={setInputValue}
                    />
                )}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        placeholder="Search for Doctors & Specialities"
                        InputProps={{
                            ...params.InputProps,
                            endAdornment: (
                                <Box
                                    display="flex"
                                    justifyContent="center"
                                    alignItems="center"
                                    bgcolor="white"
                                    borderRadius="50%"
                                    height="40px"
                                    width="40px"
                                >
                                    <InputAdornment>
                                        <SearchIcon sx={{ color: '#FF5722', fontSize: '28px' }} />
                                    </InputAdornment>
                                </Box>
                            ),
                        }}
                        sx={{
                            borderRadius: 20,
                            backgroundColor: MedantaOrange,
                            '& .MuiOutlinedInput-root': {
                                color: 'white',
                                fontWeight: 'bold',
                                paddingX: 2,
                                '& fieldset': { border: 'none' },
                                '&:hover fieldset': { border: 'none' },
                                '&.Mui-focused fieldset': { border: 'none' },
                                '& input::placeholder': {
                                    color: 'white',
                                    opacity: 1,
                                },
                            },
                        }}
                    />
                )}
            />
        </Box>
    );
};

export default SearchDoctors;
