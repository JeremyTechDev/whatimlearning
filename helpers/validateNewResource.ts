import { NewTechnology, ResourceCard } from '../types';
import validUrl from 'valid-url';

const validateNewResource = (
  newTechnology: NewTechnology,
  resources: ResourceCard[],
) => {
  let isValid = true;
  let message = '';
  if (!newTechnology.title || !newTechnology.cover_img) {
    isValid = false;
    message = 'Make sure you add a title and image url to your Learning Kit 😉';
  }

  if (!validUrl.isUri(newTechnology.cover_img)) {
    isValid = false;
    message = '❌ Make sure your Learning Kit image is valid!';
  }

  if (resources.length === 0) {
    isValid = false;
    message = "🤔 You didn't add any resources yet...";
  }

  const missingResourceUrl = resources.some(
    (resource) =>
      resource.url.trim().length === 0 || !validUrl.isUri(resource.url),
  );

  if (missingResourceUrl) {
    isValid = false;
    message = 'Make sure all your resources have valid urls 😉';
  }

  return { isValid, message };
};

export default validateNewResource;
