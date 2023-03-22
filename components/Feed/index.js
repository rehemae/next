import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
const Feed = () => {
  const [docs, setDocs] = useState(null);

  useEffect(() => {
    let docs = localStorage.getItem("surveys");
    let parsedDocs = JSON.parse(docs);
    setDocs(parsedDocs);
  }, []);
  return (
    <div>
      feed
      <Box>
        {docs && docs.length > 0
          ? docs.map((el) => (
              <div key={el.id}>
                {" "}
                {el.uniqueId} {el.id}
              </div>
            ))
          : null}
      </Box>
    </div>
  );
};

export default Feed;
