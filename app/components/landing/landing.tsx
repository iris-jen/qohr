import {Box, Card, Heading, ScrollArea, Separator, Stack, Text} from "@chakra-ui/react";
import styles from "../../styles/layout.module.css";

export const Landing = () =>{


    return (
        <ScrollArea.Root>
            <ScrollArea.Viewport>
                <ScrollArea.Content>
                    <div>

                        <Stack>
                            <Card.Root>
                                <Card.Title>
                                    <Box className={styles.box_tittle}>
                                        <Heading>
                                            Building the largest free, interconnected Queer health resource
                                        </Heading>
                                    </Box>
                                </Card.Title>
                                <Card.Body>
                                    <Text>
                                        The comprehensive, actively growing online health resource bridging domains from
                                        endocrinology, immune and sexual health, and more.
                                        QOHR is changing how queer health is accessed world wide. By breaking the boundaries
                                        between care types to provide a comprehensive,
                                        barrier-free and accessible queer health resource for all.
                                    </Text>
                                </Card.Body>
                            </Card.Root>

                            <Separator/>

                            <Card.Root>
                                <Card.Title>
                                    <Box className={styles.box_tittle}>
                                        <Heading>
                                            There is no single health resource that factors in multiple types of care for anyone.
                                        </Heading>
                                    </Box>
                                </Card.Title>
                                <Card.Body>

                                    <Text>
                                        Improved access in some countries and tightening legal restrictions in others limit
                                        the care LGBTQ+ people can access worldwide.
                                        Political agendas leverage queer people worldwide, stripping access to healthcare
                                        and making us scapegoats.
                                    </Text>

                                </Card.Body>

                            </Card.Root>


                            <Card.Root>
                                <Card.Title>
                                    <Box className={styles.box_tittle}>
                                        <Heading>
                                            What if we could have interconnected care in a single health resource?
                                        </Heading>
                                    </Box>
                                </Card.Title>
                                <Card.Body>

                                    <Text>
                                        QOHR focuses on delivering answers for health needs through a single, interconnected
                                        database. By collecting, aggregating and delivering cradle-to-grave health conscious
                                        information, QOHR’s goal is to provide a resource never-before available.

                                        Instead of focusing entirely on a single condition, QOHR looks at how different
                                        aspects of health inform each other. How caffeine interacts with ADHD, how bone
                                        density matters for transitioning individuals, how symptoms of one health issue
                                        inform others.
                                    </Text>

                                </Card.Body>

                            </Card.Root>


                            <Card.Root>
                                <Card.Title>
                                    <Box className={styles.box_tittle}>
                                        <Heading>
                                            WHY QOHR MATTERS - OUR FIGHT ISN’T OVER
                                        </Heading>
                                    </Box>
                                </Card.Title>
                                <Card.Body>

                                    <Text>
                                        Queer identifying people have had more access to healthcare now than the past 50
                                        years, largely through segmented, specialized resources. Now, systematic factors
                                        steadily grow to limit access to safe, accurate care for queer people worldwide,
                                        backsliding our access to health resources and care.

                                        With the technology available today, we could create a comprehensive health resource
                                        filled with unbiased knowledge, and spread the wealth of information publicly
                                        available today to those who need it most. QOHR aims to bring hope to queer peoples
                                        through clarity and ease of access to answering their health questions or concerns.
                                        Photo by Oriel Frankie Ashcroft on Pexels - A scene of trans pride flags and black
                                        lives matters signs at a pride event.
                                    </Text>

                                </Card.Body>

                            </Card.Root>



                                <Card.Root>
                                    <Card.Title>
                                        <Box className={styles.box_tittle}>
                                            <Heading>
                                                HOW WE'LL GROW
                                            </Heading>
                                        </Box>
                                    </Card.Title>
                                    <Card.Body>
                                        <Box className={styles.box_secondary}>
                                            <Heading>COLLECT</Heading>
                                        </Box>
                                        <Text>
                                            We collect, aggregate, cite and deliver topics
                                            surrounding a single vertical at a time.
                                            We review all available resources provided by major groups,
                                            developing a unified perspective
                                        </Text>
                                        <Separator/>
                                        <Box className={styles.box_secondary}>
                                            <Heading>CONNECT</Heading>
                                        </Box>
                                        <Text>
                                            Information gaps are highlighted, and used to identify
                                            areas of related care that interconnect with them.
                                            As further topics are collected and connected to previous ones,
                                            we gradually identify gaps in care for a variety of demographics.
                                        </Text>
                                        <Separator/>

                                        <Box className={styles.box_secondary}>
                                            <Heading>Consult</Heading>
                                        </Box>
                                        <Text>
                                            Collected information is then cross-checked with clinical care providers to
                                            verify
                                            details,
                                            gather further recommended care, and refine our offering.
                                            Community members are consulted about domains lacking support, that we can
                                            fill the
                                            gaps between.
                                        </Text>
                                    </Card.Body>

                                </Card.Root>

                        </Stack>
                    </div>
                </ScrollArea.Content>
            </ScrollArea.Viewport>
            <ScrollArea.Scrollbar>
                <ScrollArea.Thumb/>
            </ScrollArea.Scrollbar>
            <ScrollArea.Corner/>
        </ScrollArea.Root>
    )
}