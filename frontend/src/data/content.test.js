import test from 'node:test';
import assert from 'node:assert';
import * as content from './content.js';

test('navLinks has correct structure', () => {
  assert.ok(Array.isArray(content.navLinks), 'navLinks should be an array');
  content.navLinks.forEach(link => {
    assert.strictEqual(typeof link.path, 'string', 'link path should be a string');
    assert.strictEqual(typeof link.label, 'string', 'link label should be a string');
  });
});

test('heroContent has correct structure', () => {
  assert.strictEqual(typeof content.heroContent.headline, 'string');
  assert.strictEqual(typeof content.heroContent.subheadline, 'string');
  assert.strictEqual(typeof content.heroContent.ctaPrimary.label, 'string');
  assert.strictEqual(typeof content.heroContent.ctaPrimary.link, 'string');
  assert.strictEqual(typeof content.heroContent.ctaSecondary.label, 'string');
  assert.strictEqual(typeof content.heroContent.ctaSecondary.link, 'string');
});

test('impactStats has correct structure', () => {
  assert.ok(Array.isArray(content.impactStats));
  content.impactStats.forEach(stat => {
    assert.strictEqual(typeof stat.value, 'string');
    assert.strictEqual(typeof stat.label, 'string');
  });
});

test('featuredEvent has correct structure', () => {
  const event = content.featuredEvent;
  assert.strictEqual(typeof event.id, 'string');
  assert.strictEqual(typeof event.title, 'string');
  assert.strictEqual(typeof event.date, 'string');
  assert.strictEqual(typeof event.location, 'string');
  assert.strictEqual(typeof event.description, 'string');
  assert.strictEqual(typeof event.cta, 'string');
  assert.strictEqual(typeof event.link, 'string');
});

test('projects has correct structure', () => {
  assert.ok(Array.isArray(content.projects));
  content.projects.forEach(project => {
    assert.strictEqual(typeof project.id, 'string');
    assert.strictEqual(typeof project.title, 'string');
    assert.strictEqual(typeof project.category, 'string');
    assert.strictEqual(typeof project.image, 'string');
    assert.strictEqual(typeof project.description, 'string');
    assert.strictEqual(typeof project.result, 'string');
  });
});

test('socialLinks has correct structure', () => {
  assert.ok(Array.isArray(content.socialLinks));
  content.socialLinks.forEach(link => {
    assert.strictEqual(typeof link.platform, 'string');
    assert.strictEqual(typeof link.url, 'string');
    assert.strictEqual(typeof link.icon, 'string');
  });
});

test('donationMethods has correct structure', () => {
  assert.ok(Array.isArray(content.donationMethods));
  content.donationMethods.forEach(method => {
    assert.strictEqual(typeof method.type, 'string');
    assert.ok(Array.isArray(method.details));
    method.details.forEach(detail => {
      assert.strictEqual(typeof detail.label, 'string');
      assert.strictEqual(typeof detail.value, 'string');
    });
  });
});

test('events has correct structure', () => {
  assert.ok(Array.isArray(content.events));
  content.events.forEach(event => {
    assert.strictEqual(typeof event.id, 'string');
    assert.strictEqual(typeof event.title, 'string');
    assert.strictEqual(typeof event.date, 'string');
    assert.strictEqual(typeof event.location, 'string');
    assert.strictEqual(typeof event.description, 'string');
    assert.strictEqual(typeof event.cta, 'string');
    assert.strictEqual(typeof event.link, 'string');
  });
});

test('news has correct structure', () => {
  assert.ok(Array.isArray(content.news));
  content.news.forEach(item => {
    assert.strictEqual(typeof item.id, 'string');
    assert.strictEqual(typeof item.title, 'string');
    assert.strictEqual(typeof item.date, 'string');
    assert.strictEqual(typeof item.excerpt, 'string');
    assert.ok(Array.isArray(item.tags));
  });
});

test('team has correct structure', () => {
  assert.ok(Array.isArray(content.team));
  content.team.forEach(member => {
    assert.strictEqual(typeof member.name, 'string');
    assert.strictEqual(typeof member.role, 'string');
    assert.strictEqual(typeof member.image, 'string');
  });
});

test('history has correct structure', () => {
  assert.ok(Array.isArray(content.history));
  content.history.forEach(item => {
    assert.strictEqual(typeof item.year, 'string');
    assert.strictEqual(typeof item.event, 'string');
    assert.strictEqual(typeof item.description, 'string');
  });
});
