import { useState } from "react";
import { Container, VStack, Heading, FormControl, FormLabel, Input, Button, Select } from "@chakra-ui/react";

const LogWorkout = () => {
  const [workoutType, setWorkoutType] = useState("");
  const [duration, setDuration] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle workout logging
    console.log({ workoutType, duration, date });
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={6} as="form" onSubmit={handleSubmit}>
        <Heading as="h1" size="2xl" textAlign="center">Log Workout</Heading>
        <FormControl id="workout-type" isRequired>
          <FormLabel>Type of Workout</FormLabel>
          <Select placeholder="Select workout type" value={workoutType} onChange={(e) => setWorkoutType(e.target.value)}>
            <option value="cardio">Cardio</option>
            <option value="strength">Strength</option>
            <option value="flexibility">Flexibility</option>
            <option value="balance">Balance</option>
          </Select>
        </FormControl>
        <FormControl id="duration" isRequired>
          <FormLabel>Duration (minutes)</FormLabel>
          <Input type="number" value={duration} onChange={(e) => setDuration(e.target.value)} />
        </FormControl>
        <FormControl id="date" isRequired>
          <FormLabel>Date</FormLabel>
          <Input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        </FormControl>
        <Button colorScheme="teal" type="submit">Log Workout</Button>
      </VStack>
    </Container>
  );
};

export default LogWorkout;