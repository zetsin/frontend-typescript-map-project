import { FC } from "react";
import { Card, Grid, Text } from "@nextui-org/react";
import { BsBuilding } from "react-icons/bs";

const DetailCard: FC<{
  property: Property;
}> = ({ property }) => {
  const formatter = Intl.NumberFormat("en", { notation: "compact" });

  return (
    <Grid.Container>
      <Grid>
        <Grid.Container
          direction="column"
          justify="center"
          css={{
            height: "100%",
            px: 50,
            backgroundColor: "$gray100",
          }}
        >
          <BsBuilding
            style={{
              width: 48,
              height: 48,
              color: "#c8c8c8",
            }}
          />
        </Grid.Container>
      </Grid>
      <Grid>
        <Card
          variant="flat"
          css={{
            background: "none",
          }}
        >
          <Card.Header>
            <Text weight="bold">{property.address}</Text>
          </Card.Header>
          <Card.Body
            css={{
              p: 0,
            }}
          >
            <Grid.Container gap={2} justify="space-between">
              <Grid>
                <Text color="primary">
                  {formatter.format(property.visitors ?? 0)}
                </Text>
                <Text size="$xs">Visitors</Text>
              </Grid>
              <Grid>
                <Text color="primary">
                  {formatter.format(property.frequency ?? 0)}
                </Text>
                <Text size="$xs">Frequency</Text>
              </Grid>
              <Grid>
                <Text color="primary">
                  {formatter.format(property.medium_income ?? 0)}
                </Text>
                <Text size="$xs">Medium Income</Text>
              </Grid>
            </Grid.Container>
          </Card.Body>
        </Card>
      </Grid>
    </Grid.Container>
  );
};

export default DetailCard;
