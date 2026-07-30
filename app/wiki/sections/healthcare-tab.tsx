import {Button, Tabs, Card, Avatar, HStack} from "@chakra-ui/react";

export default function HealthcareTab() {
    return (
        <HStack>
            <Card.Root width="320px">
                <Card.Body gap="2">
                    <Avatar.Root size="lg" shape="rounded">
                        <Avatar.Image src="https://picsum.photos/200/300" />
                        <Avatar.Fallback name="Doctor Pic" />
                    </Avatar.Root>
                    <Card.Title mt="2">Doctors</Card.Title>
                    <Card.Description>
                        Find local healthcare providers in your area
                    </Card.Description>
                </Card.Body>
                <Card.Footer justifyContent="flex-end">
                    <Button variant="outline">View</Button>
                </Card.Footer>
            </Card.Root>

            <Card.Root width="320px">
                <Card.Body gap="2">
                    <Avatar.Root size="lg" shape="rounded">
                        <Avatar.Image src="https://picsum.photos/200/200" />
                        <Avatar.Fallback name="Body Care" />
                    </Avatar.Root>
                    <Card.Title mt="2">Body Care</Card.Title>
                    <Card.Description>
                        Find trusted professionals for laser, electrolysis, hair care, etc
                    </Card.Description>
                </Card.Body>
                <Card.Footer justifyContent="flex-end">
                    <Button variant="outline">View</Button>
                </Card.Footer>
            </Card.Root>
            <Card.Root width="320px">
                <Card.Body gap="2">
                    <Avatar.Root size="lg" shape="rounded">
                        <Avatar.Image src="https://picsum.photos/200/250" />
                        <Avatar.Fallback name="Mental Health" />
                    </Avatar.Root>
                    <Card.Title mt="2">Body Care</Card.Title>
                    <Card.Description>
                        Get information and numbers for crisis care. or connect with vetted social workers,
                        psychiatrists and other mental health professionals
                    </Card.Description>
                </Card.Body>
                <Card.Footer justifyContent="flex-end">
                    <Button variant="outline">View</Button>
                </Card.Footer>
            </Card.Root>
        </HStack>
    );
}