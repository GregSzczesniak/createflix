export type Movie = {
  "im:name": {
    label: string;
  };
  "im:image": {
    label: string;
    attributes: {
      height: number;
    };
  }[];
  summary: {
    label: string;
  };
  "im:price": {
    label: string;
    attributes: {
      amount: number;
      currency: string;
    };
  };
  "im:contentType": {
    attributes: {
      term: string;
      label: string;
    };
  };
  rights: {
    label: string;
  };
  title: {
    label: string;
  };
  link: [
    {
      attributes: {
        rel: string;
        type: string;
        href: string;
      };
    },
    {
      "im:duration": {
        label: number;
      };
      attributes: {
        title: string;
        rel: string;
        type: string;
        href: string;
        "im:assetType": string;
      };
    }
  ];
  id: {
    label: string;
    attributes: {
      "im:id": number;
    };
  };
  "im:artist": {
    label: string;
  };
  category: {
    attributes: {
      "im:id": number;
      term: string;
      scheme: string;
      label: string;
    };
  };
  "im:releaseDate": {
    label: Date;
    attributes: {
      label: string;
    };
  };
};
